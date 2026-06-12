# CONFigureWCDMaSIGNiULGFACtorRMCno

Module: WCDMA Measurements
Source: a4db07f15bf047cf.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for General Measurement Settings
 > 
CONFigure:WCDMa:SIGN<i>:UL:GFACtor:RMC<no>
CONFigure:WCDMa:SIGN<i>:UL:GFACtor:RMC<no> 
<BetaC>, <BetaD>
Specifies the UE gain factors β
c
 (DPCCH) and β
d
 (DPDCH) for RMC connections with the selected data rate.
Suffix: 
<no>
1..5
Selects the RMC data rate
1
: 12.2 kbps
2
: 64 kbps
3
: 144 kbps
4
: 384 kbps
5
: 768 kbps
Parameters:
<BetaC>
Range: 
1  to  15
*RST:
8, 5, 4, 4, 4 for <no> 1 to 5
<BetaD>
Range: 
1  to  15
*RST:
15
Firmware/Software: 
V1.0.15.0
V2.1.30: added <no> = 5
V3.0.10: R&S CMW-KS410 no longer required
Manual operation: 
See 
"UE Channels"
Top