# CONFigureLTESIGNiNCELlCDMACELLn

Module: LTE Signaling
Source: 44245415623d4690.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell Settings
 > 
CONFigure:LTE:SIGN<i>:NCELl:CDMA:CELL<n>
CONFigure:LTE:SIGN<i>:NCELl:CDMA:CELL<n> 
<Enable>, <BandClass>, <Channel>, <CellID>[, <Measurement>]
CONFigure:LTE:SIGN<i>:NCELl:EVDO:CELL<n> 
<Enable>, <BandClass>, <Channel>, <CellID>[, <Measurement>]
Configures the entry number <n> of the neighbor cell list for CDMA2000 (1xRTT) or 1xEV-DO (HRPD).
Suffix: 
<n>
1..4
Parameters:
<Enable>
OFF |
 
 ON
Enables or disables the entry
*RST:
OFF
<BandClass>
USC |
 
 KCEL |
 
 NAPC |
 
 TACS |
 
 JTAC |
 
 KPCS |
 
 N45T |
 
 IM2K |
 
 NA7C |
 
 B18M |
 
 NA8S |
 
 PA4M |
 
 PA8M |
 
 IEXT |
 
 USPC |
 
 AWS |
 
 U25B |
 
 U25F |
 
 NA9C |
 
 PS7C |
 
 LO7C
USC:
 BC 0, US cellular
KCEL:
 BC 0, Korean cellular
NAPC:
 BC 1, North American PCS
TACS:
 BC 2, TACS band
JTAC:
 BC 3, JTACS band
KPCS:
 BC 4, Korean PCS
N45T:
 BC 5, NMT-450
IM2K:
 BC 6, IMT-2000
NA7C:
 BC 7, upper 700 MHz
B18M:
 BC 8, 1800 MHz band
NA9C:
 BC 9, North American 900 MHz
NA8S:
 BC 10, secondary 800 MHz
PA4M:
 BC 11, European 400 MHz PAMR
PA8M:
 BC 12, 800 MHz PAMR
IEXT:
 BC 13, IMT-2000 2.5 GHz extension
USPC:
 BC 14, US PCS 1900 MHz
AWS:
 BC 15, AWS band
U25B:
 BC 16, US 2.5 GHz band
U25F:
 BC 17, US 2.5 GHz forward
PS7C:
 BC 18, public safety band 700 MHz
LO7C:
 BC 19, lower 700 MHz
*RST:
USC
<Channel>
Channel number
Range: 
0 to 2108, depending on band class, see table below
*RST:
283
<CellID>
Physical cell ID
Range: 
0  to  511
*RST:
0
<Measurement>
OFF |
 
 ON
Disables / enables neighbor cell measurements for the entry
ON is only allowed if also <Enable> = ON
*RST:
OFF
Example: 
See 
"Configuring Neighbor Cells and Reselection"
Firmware/Software: 
V3.0.50
Options: 
R&S CMW-KS510 for neighbor cell measurements
Manual operation: 
See 
"CDMA2000, 1xEV-DO"
Channel number range depending on band class
Band class
Channel number
USC, KCEL
1 to 799, 991 to 1323
NAPC, IM2K
0 to 1199
TACS
0 to 1000, 1329 to 2108
JTAC
1 to 799, 801 to 1039, 1041 to 1199, 1201 to 1600
KPCS
0 to 599
N45T
1 to 400, 472 to 871, 1039 to 1473, 1536 to 1715, 1792 to 2016
NA7C, PS7C
0 to 240
B18M
0 to 1499
NA9C
0 to 699
NA8S
0 to 919
PA4M
1 to 400, 472 to 871, 1536 to 1715
PA8M
0 to 239
IEXT
0 to 1399
USPC
0 to 1299
AWS
0 to 899
U25B, U25F
140 to 1459
LO7C
0 to 360
Top