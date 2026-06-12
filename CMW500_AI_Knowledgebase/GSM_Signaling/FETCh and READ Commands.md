# FETCh and READ Commands

Module: GSM Signaling
Source: 7977931bcfed4cf0.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Conventions and General Information
 > 
FETCh and READ Commands
FETCh and READ Commands
All commands are used to retrieve measurement results:
FETCh:GSM...
 returns the results of the current measurement cycle (single-shot measurement) after they are valid. 
FETCh...
 must be used after the measurement has been started (
INITiate...
, measurement states RUN or RDY).
FETCh:INTermediate:GSM...?
 does not wait until the end of the current measurement cycle and returns the intermediate results including the reliability indicators.
READ...
 starts a new single-shot measurement and returns the results.
See also: 
"Retrieving Measurement Results"
Top