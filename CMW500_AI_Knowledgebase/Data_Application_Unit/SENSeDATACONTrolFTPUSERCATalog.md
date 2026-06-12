# SENSeDATACONTrolFTPUSERCATalog

Module: Data Application Unit
Source: d1970112e19585.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
FTP Service
 > 
SENSe:DATA:CONTrol:FTP:USER:CATalog?
SENSe:DATA:CONTrol:FTP:USER:CATalog? 
Queries the existing FTP user accounts and their permissions.
The four values listed below are returned for each FTP user: {<User>, <DeleteAllowed>, <DownloadAllowed>, <UploadAllowed>}
user 1
, {...}
user 2
, ..., {...}
user n
.
Return values: 
<User>
FTP user name as string
<DeleteAllowed>
OFF |
 
 ON
OFF
: delete forbidden
ON
: delete allowed
<DownloadAllowed>
OFF |
 
 ON
OFF
: download forbidden
ON
: download allowed
<UploadAllowed>
OFF |
 
 ON
OFF
: upload forbidden
ON
: upload allowed
Example: 
See 
"Configuring the FTP Service"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"FTP User Accounts"
Top