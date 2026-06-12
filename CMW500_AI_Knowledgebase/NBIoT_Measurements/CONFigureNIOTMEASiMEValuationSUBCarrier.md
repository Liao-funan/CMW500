# CONFigureNIOTMEASiMEValuationSUBCarrier

Module: NBIoT Measurements
Source: cedf627282c04b93.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Control Parameters
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:SUBCarrier
CONFigure:NIOT:MEAS<i>:MEValuation:SUBCarrier 
<NofSubCarrier>, <Offset>
Specifies the subcarrier configuration of the allocated resource units.
For the combined signal path scenario, use the uplink scheduling commands of the signaling application.
Parameters:
<NofSubCarrier>
1 |
 
 3 |
 
 6 |
 
 12
Number of subcarriers per resource unit
The allowed values have dependencies, see 
"Resource Unit Allocation"
.
*RST:
1
<Offset>
Offset of the first allocated subcarrier from the edge of the transmission bandwidth
For a subcarrier spacing of 3.75 kHz / 15 kHz, n equals 48 / 12.
Range: 
0  to  n - <NofSubCarrier>
*RST:
0
Example: 
See 
"Specifying Required Settings"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"No. of Subcarriers, Start Subcarrier"
Top