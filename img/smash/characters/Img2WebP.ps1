# Copy this file to any directory containing images & then run this script in powershell
# Get all png images in the current directory & convert it to webp format
# $images = Get-ChildItem -Path (Get-Location) -Filter *.png
# foreach ($image in $images) {
  # fileName = $image.DirectoryName + "\" + "zelda" + ".webp"
  C:\Users\Sanity\Downloads\libwebp-1.4.0-windows-x64\libwebp-1.4.0-windows-x64\bin\cwebp.exe -q 100 zelda.png -o zelda.webp
# }