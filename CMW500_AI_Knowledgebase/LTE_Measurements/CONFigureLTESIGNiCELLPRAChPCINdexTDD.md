# CONFigureLTESIGNiCELLPRAChPCINdexTDD

Module: LTE Measurements
Source: 2236e4896eb445ca.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for PRACH Measurement
 > 
CONFigure:LTE:SIGN<i>:CELL:PRACh:PCINdex:TDD
CONFigure:LTE:SIGN<i>:CELL:PRACh:PCINdex:TDD 
<PRACHconfIndex>
Selects the PRACH configuration index for TDD.
Parameters:
<PRACHconfIndex>
Range: 
depends on UL-DL configuration, see tables below
*RST:
12
Firmware/Software: 
V2.1.20
Options: 
R&S CMW-KS550
Manual operation: 
See 
"PRACH Configuration Index"
The general range for the TDD PRACH configuration index equals 0 to 57. Within this range, 3GPP defines forbidden values depending on the UL-DL configuration, see 3GPP TS 36.211, table 5.7.1-4. The following tables list the allowed values.
Allowed values for cell bandwidth > 1.4 MHz
UL-DL configuration
Allowed PRACH configuration indices
0
0-10, 12-18, 20-57
1
0-7, 9-12, 15-39, 48-57
2
0-4, 6, 9, 10, 12, 15, 16, 18, 48-57
3
0-9, 12-18, 20, 21, 23, 25-29, 30, 31, 33, 35-39, 40, 41, 43, 45-49, 51, 53-57
4
0-4, 6, 9, 10, 12, 15, 16, 18, 20, 21, 23, 25-29, 30, 31, 33, 35-39, 48, 49, 51, 53-57
5
0, 1, 3, 6, 9, 12, 15, 18, 48, 49, 51, 53-57
6
0-15, 18-41, 43, 45-57
Allowed values for cell bandwidth = 1.4 MHz
UL-DL configuration
Allowed PRACH configuration indices
0
0-10, 12-18, 20-26, 30-36, 40-45, 48-53
1
0-7, 9-12, 20-25, 30-35, 48-53
2
0-4, 6, 48-53
3
0-9, 20, 21, 23, 30, 31, 33, 40, 41, 43, 48, 49, 51
4
0-4, 6, 20, 21, 23, 30, 31, 33, 48, 49, 51
5
0, 1, 3, 48, 49, 51
6
0-15, 20-25, 30-35, 40, 41, 43, 48-53
Top