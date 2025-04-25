# learning npm
# Starting with learning-npm branch

if you get ERR_DLOPEN_FAILED 

This worked for me for parcel 2.

The issue is because the package is failing due to a missing library on the computer. fs-search requires Microsoft Visual C++ 2015 Redistributable (x64).

You can get the download here -> https://aka.ms/vs/17/release/vc_redist.x64.exe