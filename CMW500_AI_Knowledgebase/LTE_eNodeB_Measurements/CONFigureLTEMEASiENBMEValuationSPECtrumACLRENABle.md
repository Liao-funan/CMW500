# CONFigureLTEMEASiENBMEValuationSPECtrumACLRENABle

Module: LTE eNodeB Measurements
Source: 0c71dae643d547d0.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:SPECtrum:ACLR:ENABle
CONFigure:LTE:MEAS<i>:ENB:MEValuation:SPECtrum:ACLR:ENABle 
<EUTRA>, <UTRA128>, <UTRA384>, <UTRA768>
Specifies which types of adjacent channels are evaluated for the ACLR results. For each enabled type, the 1
st
 and 2
nd
 adjacent channels are evaluated.
When you change the duplex mode or the channel bandwidth, 3GPP compliant default values are automatically applied, see 
Table "Relevant adjacent channel types, depending on duplex mode and E-UTRA channel BW"
.
Parameters:
<EUTRA>
OFF |
 
 ON
E-UTRA channels with the same bandwidth as the carrier
<UTRA128>
OFF |
 
 ON
UTRA channels with 1.28 MHz bandwidth
<UTRA384>
OFF |
 
 ON
UTRA channels with 3.84 MHz bandwidth
<UTRA768>
OFF |
 
 ON
UTRA channels with 7.68 MHz bandwidth
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V3.0.20
Top