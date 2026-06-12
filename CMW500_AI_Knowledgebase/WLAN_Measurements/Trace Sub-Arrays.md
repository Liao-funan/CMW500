# Trace Sub-Arrays

Module: WLAN Measurements
Source: 65aa56dfa69c4fb7.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Conventions and General Information
 > 
Trace Sub-Arrays
Trace Sub-Arrays
The optional query parameters 
<Start>
, 
<Count>
 and 
<Decimation>
 can be used to limit the value array that is returned by a "TRACe" command:
Limit the returned array to the segment beginning with position 
<Start>
.
If necessary, further limit the segment to 
<Count>
 values.
If necessary, further decimate the segment 
<Start>
 ... 
<Start>
+
<Count>
-1 by returning only every nth value (
<Decimation>
 = n)
Example: 
FETCh:<FWA>:MEAS:MEV:TRACe:xx? 100, 10, 3
 returns every 3rd value of the 10 values beginning with the 100th one.
Top