# CONFigureLTESIGNiCELLTOUTTEXTno

Module: LTE Signaling
Source: 1e84e903f7c44686.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Timer and Constants
 > 
CONFigure:LTE:SIGN<i>:CELL:TOUT:TEXT<no>
CONFigure:LTE:SIGN<i>:CELL:TOUT:TEXT<no> 
<value>
Configures an extended value for timer T3412.
The information element supports the values 1 to 31 combined with the units 2 s, 30 s, 1 min, 10 min, 1 h, 10 h and 320 h.
This command configures the timer value in seconds. So there are subranges with different increments.
Suffix: 
<no>
3412
Parameters:
<value>
Range: 
2 s  to  35712000 s
Increment: 
see table
*RST:
2 s
Additional parameters: OFF | ON (disables | enables the timer)
Example: 
See 
"Configuring Other Network Settings"
Firmware/Software: 
V3.7.10
Manual operation: 
See 
"T3412 Extended"
Range
Increment
Remark
2 s to 62 s
2 s
 
90 s to 930 s
30 s
900 s = 15 min
960 s to 1860 s
60 s
1800 s = 30 min
2400 s to 18600 s
600 s
18000 s = 5 h
21600 s to 111600 s
3600 s
111600 s = 1 d, 7 h
144000 s to 1116000 s
36000 s
1116000 s = 12 d, 22 h
1152000 s to 35712000 s
1152000 s
35712000 s = 413 d, 8 h
Top