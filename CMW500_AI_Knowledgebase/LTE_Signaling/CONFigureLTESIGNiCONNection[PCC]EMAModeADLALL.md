# CONFigureLTESIGNiCONNection[PCC]EMAModeADLALL

Module: LTE Signaling
Source: f2358e444926462e.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
eMTC Auto Mode Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:EMAMode:A:DL:ALL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:EMAMode:A:DL:ALL 
<NumberRB>, <StartRB>, <NarrowBand>, <Modulation>, <TransBlockSizeIdx>
Configures the eMTC auto mode, downlink, for CE mode A.
The indicated input ranges list all possible values. The ranges have dependencies described in the background information, see 
Table "eMTC auto mode settings"
.
Parameters:
<NumberRB>
ZERO |
 
 N1 |
 
 N2 |
 
 N3 |
 
 N4 |
 
 N5 |
 
 N6
Number of allocated resource blocks
*RST:
N6
<StartRB>
Position of first resource block
Range: 
0  to  6
*RST:
0
<NarrowBand>
Narrowband for the first transmission
Range: 
0  to  15
*RST:
0
<Modulation>
QPSK |
 
 Q16
Modulation type QPSK | 16-QAM
*RST:
QPSK
<TransBlockSizeIdx>
Transport block size index
Range: 
0  to  14
*RST:
6
Example: 
See 
"Configuring eMTC Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS590
Manual operation: 
See 
"# Resource Blocks ... Transport Block Size"
Top