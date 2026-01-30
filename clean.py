#!/usr/bin/env python3

import shutil
from pathlib import Path

dst = Path("dst")

for item in dst.iterdir():
    if item.is_dir():
        shutil.rmtree(item)
    else:
        item.unlink()