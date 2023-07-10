from pydantic import BaseModel
from fastapi import File

# TODO: file(s) schema

class DeleteFileDTO:
    file_id: str