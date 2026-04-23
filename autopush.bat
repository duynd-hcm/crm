@echo off
echo ==============================================
echo  ELC CRM Auto-Push to GitHub
echo ==============================================

:: Kiem tra xem Git da duoc cai dat chua
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [LOI] chua tim thay Git. Ban can tai vao cai dat Git for Windows!
    echo Vui long truy cap: https://git-scm.com/download/win de cai dat.
    pause
    exit /b
)

:: Thuc hien thao tac Git
echo [1] Khoi tao va luu thay doi...
git init
git remote add origin https://github.com/duynd-hcm/crm.git
git add .

echo [2] Dang luu phien ban hien tai...
set /p commitMsg="Nhap thong diep (Nhan Enter de dung mac dinh): "
if "%commitMsg%"=="" (
    git commit -m "Auto-update from Windows Batch Script"
) else (
    git commit -m "%commitMsg%"
)

git branch -M main

echo [3] Dang day len GitHub...
git push -u origin main -f

if %errorlevel% equ 0 (
    echo ==============================================
    echo  THANH CONG! Code ban da duoc day len GitHub!
    echo ==============================================
) else (
    echo ==============================================
    echo  [LOi] Co loi xay ra trong qua trinh doi len Github.
    echo  Kiem tra lai ket noi hoac xem lai repos cua ban nhe.
    echo ==============================================
)
pause
