import platform
from aiohttp import web
import asyncio
import json
import os
import traceback
import logging
from threading import Lock
import server
import uuid
from aiohttp.web import FileResponse
from .setting_service import get_my_workflows_dir

@server.PromptServer.instance.routes.get('/workspace/get_os')
async def scan_my_workflows_files(request):
    return web.Response(text=json.dumps({'os': platform.system()}), content_type='application/json')

@server.PromptServer.instance.routes.post('/workspace/file/scan_my_workflows_folder')
async def scan_my_workflows_files(request):
    reqJson = await request.json()
    path = reqJson['path']
    path = os.path.join(get_my_workflows_dir(), path)
    recursive = reqJson.get('recursive', False)
    metaInfoOnly = reqJson.get('metaInfoOnly', False)
    
    fileList = await asyncio.to_thread(folder_handle, path, recursive, metaInfoOnly)
    return web.Response(text=json.dumps(fileList), content_type='application/json')

@server.PromptServer.instance.routes.get('/workspace/file/download')
async def download_file(request):
    """
    Endpoint for downloading a file, no matter the type (including files without extensions).
    """
    reqJson = await request.json()
    file_path = reqJson['file_path']  # Expecting the full path of the file to download

    if not os.path.exists(file_path):
        return web.Response(text=json.dumps({'error': 'File not found'}), status=404, content_type='application/json')

    try:
        # Return file as a response with the correct headers
        return FileResponse(path=file_path)

    except Exception as e:
        logging.error(f"Error while downloading file {file_path}: {e}")
        return web.Response(text=json.dumps({'error': 'Failed to download the file'}), status=500, content_type='application/json')


def folder_handle(path, recursive, metaInfoOnly, fileList=None):
    if fileList is None:
        fileList = []
    for item in os.listdir(path):
        item_path = os.path.join(path, item)
        try:
            # List all files (no restriction on extension)
            if os.path.isfile(item_path):
                file_handle(item, fileList, item_path, metaInfoOnly)

            # If it's a directory
            elif os.path.isdir(item_path):
                createTime, updateTime = getFileCreateTime(item_path)
                fileList.append({
                    'name': item,
                    'path': item_path,
                    'type': 'folder',
                    'createTime': createTime,
                    'updateTime': updateTime
                })
                # Recursively scan if recursive is True
                if recursive:
                    folder_handle(item_path, recursive, metaInfoOnly, fileList)

        except Exception as e:
            logging.error(f"Error scanning {item_path}: {e}, {traceback.format_exc()}")
    return fileList

def file_handle(name, fileList, file_path, metaInfoOnly):
    try:
        # Handling files without extension and binary/text files
        createTime, updateTime = getFileCreateTime(file_path)
        fileList.append({
            'name': name,
            'type': 'file',
            'path': file_path,
            'createTime': createTime,
            'updateTime': updateTime
        })

    except Exception as e:
        logging.error(f"Error handling file {file_path}: {e}")

def getFileCreateTime(path):
    # Cross-platform compatibility for creation time
    file_stats = os.stat(path)
    if platform.system() == 'Windows':
        createTime = int(file_stats.st_ctime * 1000)
    else:  # macOS and potentially others
        createTime = int(getattr(file_stats, 'st_birthtime', file_stats.st_ctime) * 1000)
    
    updateTime = int(file_stats.st_mtime * 1000)
    return createTime, updateTime
