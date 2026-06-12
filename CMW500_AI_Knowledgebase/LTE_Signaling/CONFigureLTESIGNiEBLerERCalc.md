# CONFigureLTESIGNiEBLerERCalc

Module: LTE Signaling
Source: d35e98552.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Settings
 > 
CONFigure:LTE:SIGN<i>:EBLer:ERCalc
CONFigure:LTE:SIGN<i>:EBLer:ERCalc 
<Algorithm>
Selects the formula to be used for calculation of the BLER from the number of ACK, NACK and DTX.
Parameters:
<Algorithm>
ERC1 |
 
 ERC2 |
 
 ERC3 |
 
 ERC4
ERC1:
 
BLER = (NACK + DTX) / (ACK + NACK + DTX)
ERC2:
 
BLER = DTX / (ACK + NACK + DTX)
ERC3:
 
BLER = NACK / (ACK + NACK + DTX)
ERC4:
 
BLER = NACK / (ACK + NACK)
*RST:
ERC1
Example: 
See 
"Configuring a BLER Measurement"
Firmware/Software: 
V3.0.30
Manual operation: 
See 
"Error Ratio Calculation"
Top