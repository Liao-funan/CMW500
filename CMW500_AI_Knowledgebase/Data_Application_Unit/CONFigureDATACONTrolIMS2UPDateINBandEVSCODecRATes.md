# CONFigureDATACONTrolIMS2UPDateINBandEVSCODecRATes

Module: Data Application Unit
Source: cd49caa6bf264420.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Call Update (Inband)
 > 
CONFigure:DATA:CONTrol:IMS2:UPDate:INBand:EVS:CODec:RATes
CONFigure:DATA:CONTrol:IMS2:UPDate:INBand:EVS:CODec:RATes 
<EVSBitrate>
Configures an EVS codec rate or bit rate to be requested via CMR. For BW=DEAC, you cannot set a rate.
Parameters:
<EVSBitrate>
NOReq |
 
 AW66 |
 
 AW885 |
 
 AW1265 |
 
 AW1425 |
 
 AW1585 |
 
 AW1825 |
 
 AW1985 |
 
 AW2305 |
 
 AWB2385 |
 
 PR59 |
 
 PR72 |
 
 PR80 |
 
 PR96 |
 
 P132 |
 
 P164 |
 
 P244 |
 
 P320 |
 
 P480 |
 
 P640 |
 
 P960 |
 
 P1280 |
 
 SLO2 |
 
 SLO3 |
 
 SLO5 |
 
 SLO7 |
 
 SHO2 |
 
 SHO3 |
 
 SHO5 |
 
 SHO7 |
 
 WLO2 |
 
 WLO3 |
 
 WLO5 |
 
 WLO7 |
 
 WHO2 |
 
 WHO3 |
 
 WHO5 |
 
 WHO7
NOReq
No codec rate requirement (NO_REQ)
Only for BW=NOReq
AW66 to AWB2385
AMR-WB IO mode, 6.6 kbit/s to 23.85 kbit/s
Only for BW=IO
PR59 to P1280
Primary mode, 5.9 kbit/s to 128.0 kbit/s
For BW=NB: PR59 to P244
For BW=WB: PR59 to P1280
For BW=SWB: PR96 to P1280
For BW=FB: P164 to P1280
SLO2 to SLO7
SWB with channel-aware mode, CA-L-O2 to CA-L-O7
Only for BW=SWBCa
SHO2 to SHO7
SWB with channel-aware mode, CA-H-O2 to CA-H-O7
Only for BW=SWBCa
WLO2 to WLO7
WB with channel-aware mode, CA-L-O2 to CA-L-O7
Only for BW=WBCA
WHO2 to WHO7
WB with channel-aware mode, CA-H-O2 to CA-H-O7
Only for BW=WBCA
*RST:
PR59
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KAA21
Manual operation: 
See 
"Inband tab"
Top