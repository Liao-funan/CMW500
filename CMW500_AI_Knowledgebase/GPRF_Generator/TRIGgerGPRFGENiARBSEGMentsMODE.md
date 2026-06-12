# TRIGgerGPRFGENiARBSEGMentsMODE

Module: GPRF Generator
Source: cea1392b9b104f9c.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Trigger and Multi-Segment Settings
 > 
TRIGger:GPRF:GEN<i>:ARB:SEGMents:MODE
TRIGger:GPRF:GEN<i>:ARB:SEGMents:MODE 
<Mode>
Selects a trigger mode for multi-segment waveform files.
Parameters:
<Mode>
CONTinuous |
 
 CSEamless |
 
 AUTO
CONTinuous:
 A trigger event causes immediate switchover to the next segment
CSEamless:
 A trigger event causes switchover after the end of the segment has been reached
AUTO:
 The generator processes one segment after another
*RST:
CONT
Example: 
See 
"Using the Arbitrary Mode"
Firmware/Software: 
V1.0.4.11 (AUTO in V1.0.15.0)
Manual operation: 
See 
"Baseband > ARB > Trigger > Multi Segment > Repetition"
Top