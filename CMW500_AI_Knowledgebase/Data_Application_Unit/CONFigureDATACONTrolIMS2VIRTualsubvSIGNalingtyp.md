# CONFigureDATACONTrolIMS2VIRTualsubvSIGNalingtyp

Module: Data Application Unit
Source: c8e49542e30c4053.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Virtual Subscriber Settings
 > 
Basic Profile Settings
 > 
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:SIGNalingtyp
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:SIGNalingtyp 
<SigType>
Specifies whether a voice call session is established with or without quality-of-service preconditions.
Suffix: 
<v>
1..20
Parameters:
<SigType>
PRECondit |
 
 NOPRecondit |
 
 SIMPle |
 
 REQU100 |
 
 REQuprecondi |
 
 WOTPrec183 |
 
 EARLymedia
PRECondit
With preconditions
NOPRecondit
Without preconditions
SIMPle
Simplified call flow, without preconditions
REQU100
Require 100rel, without preconditions
REQuprecondi
Require precondition, with preconditions
WOTPrec183
With 183, without preconditions
EARLymedia
Early media, with or without preconditions
*RST:
NOPR
Example: 
See 
"Configuring virtual subscriber profiles"
Firmware/Software: 
V3.5.10
V3.5.21: REQU100, REQuprecondi, WOTPrec183
V3.7.11: EARLymedia
Manual operation: 
See 
"Signaling Type"
Top