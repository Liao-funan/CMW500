# CONFigureWCDMaSIGNiBERLIMit

Module: WCDMA Signaling
Source: 409da9903a2b45fb.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
BER Measurement
 > 
Measurement Settings
 > 
CONFigure:WCDMa:SIGN<i>:BER:LIMit
CONFigure:WCDMa:SIGN<i>:BER:LIMit 
<BER>, <BLER>, <DBLER>, <LostTransBlocks>, <ULTFCIFaults>, <FDR>, <PNDiscontinuity>
Specifies upper limits for the results of the "BER" measurement.
Parameters:
<BER>
Range: 
0 %  to  100 %
*RST:
0.1 %
Default unit: 
%
Additional OFF | ON disables | enables the limit using the previous/default level
<BLER>
Range: 
0 %  to  100 %
*RST:
1 %
Default unit: 
%
Additional OFF | ON disables | enables the limit using the previous/default level
<DBLER>
Range: 
0 %  to  100 %
*RST:
1 %
Default unit: 
%
Additional OFF | ON disables | enables the limit using the previous/default level
<LostTransBlocks>
Range: 
1  to  50000
*RST:
1
Additional OFF | ON disables | enables the limit using the previous/default level
<ULTFCIFaults>
Range: 
0 %  to  100 %
*RST:
1 %
Default unit: 
%
Additional OFF | ON disables | enables the limit using the previous/default level
<FDR>
Range: 
0 %  to  100 %
*RST:
1 %
Default unit: 
%
Additional OFF | ON disables | enables the limit using the previous/default level
<PNDiscontinuity>
Range: 
1  to  50000
*RST:
1
Additional OFF | ON disables | enables the limit using the previous/default level
Example: 
See 
"Configuring the BER Measurement"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"Limit"
Top