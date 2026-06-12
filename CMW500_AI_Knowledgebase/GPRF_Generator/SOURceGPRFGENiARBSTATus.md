# SOURceGPRFGENiARBSTATus

Module: GPRF Generator
Source: 43ca9c2b4c3c4dfb.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Trigger and Multi-Segment Settings
 > 
SOURce:GPRF:GEN<i>:ARB:STATus?
SOURce:GPRF:GEN<i>:ARB:STATus? 
Queries the number of the currently processed segment.
Even for the repetition "Continuous Seamless", the currently processed segment is returned, independent of whether a trigger event for the next segment has already been received or not.
This command is only supported by R&S
 
CMW100/CMW with MUA, not by R&S
 
CMW500/2xx with BB Meas.
Return values: 
<ARBSegmentNo>
Integer number. 
NAV
 is returned if no file is loaded.
Range: 
0  to  1000
Usage: 
Query only
Firmware/Software: 
V3.7.10
Manual operation: 
See 
"Baseband > ARB > Trigger > Multi Segment > Current Segment"
Top