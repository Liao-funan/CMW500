# CONFigureDATACONTrolIMS2VIRTualsubvAMRCODecCodecIdxENABle

Module: Data Application Unit
Source: 17c1d01d30f24f96.htm

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
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:AMR:CODec<CodecIdx>:ENABle
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:AMR:CODec<CodecIdx>:ENABle 
<CodecRate>
Enables or disables a codec rate for the currently active AMR type, see 
CONFigure:
​
DATA:
​
CONTrol:
​
IMS2:
​
VIRTualsub<v>:
​
ADCodec:
​
TYPE
.
Suffix: 
<v>
1..20
<CodecIdx>
1..9
Selects the codec rate via its index.
Parameters:
<CodecRate>
OFF |
 
 ON
OFF
: codec rate not supported
ON
: codec rate supported
*RST:
OFF
Example: 
See 
"Configuring virtual subscriber profiles"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Codec Rates"
Top