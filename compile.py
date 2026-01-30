#!/usr/bin/env python3

import subprocess
from pathlib import Path
import shutil


def compile_typst(typ_file, html_file, root):
    html_file.parent.mkdir(parents=True, exist_ok=True)
    print(f"Compiling: {typ_file} -> {html_file}")
    subprocess.run([
        "typst", "compile", "--root", root,
        "--format", "html", "--features", "html",
        str(typ_file), str(html_file)
    ])


if __name__ == "__main__":
    src_dir = Path("src")
    dst_dir = Path("dst")

    # Compile all index.typ files
    for typ_file in src_dir.rglob("index.typ"):
        html_file = dst_dir / typ_file.relative_to(src_dir).with_suffix(".html")
        compile_typst(typ_file, html_file, src_dir)

    # Compile 404 file
    compile_typst(src_dir / "404.typ", dst_dir / "404.html", src_dir)

    # Copy assets folder to destination directory
    shutil.copytree("assets", dst_dir, dirs_exist_ok=True)
