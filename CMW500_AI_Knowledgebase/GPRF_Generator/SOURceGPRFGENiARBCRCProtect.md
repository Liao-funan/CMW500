# SOURceGPRFGENiARBCRCProtect

Module: GPRF Generator
Source: d98e4a3ec553436b.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Settings
 > 
SOURce:GPRF:GEN<i>:ARB:CRCProtect?
SOURce:GPRF:GEN<i>:ARB:CRCProtect? 
Indicates whether the loaded ARB file contains a CRC checksum, which can be used for an integrity check (see 
SOURce:
​
GPRF:
​
GEN<i>:
​
RELiability:
​
ALL?
).
To get a valid result, the related ARB file must be loaded into the memory, i.e. the baseband mode must be ARB and the generator state must be ON. Otherwise NAV is returned.
Return values: 
<CRCProtection>
NO |
 
 YES
Usage: 
Query only
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Baseband Configuration > ARB > ARB File"
Top