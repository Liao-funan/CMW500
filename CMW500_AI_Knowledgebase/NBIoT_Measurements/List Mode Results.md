# List Mode Results

Module: NBIoT Measurements
Source: f7b4152964c64c54.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results
List Mode Results
The following commands return the list mode results for a selected segment.
To configure the list mode, use the commands described in 
"List Mode Settings"
.
For a description of the list mode, see 
"List Mode"
.
The segment number <no> in the following commands refers to the range of measured segments (1..1000), see 
CONFigure:
​
NIOT:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
LRANge
. It can differ from the absolute segment number used for segment configuration.
The indicated ranges apply to all statistical results except to standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
List of Commands
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SRELiability?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:AVERage?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:AVERage?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:EXTReme?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:SDEViation?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:CURRent:SCINdex?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:EXTReme:SCINdex?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:AVERage?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:SDEViation?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:EXTReme?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:AVERage?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:SDEViation?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:EXTReme?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:ALL?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:CURRent:NEGativ?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:CURRent:POSitiv?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:AVERage:NEGativ?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:AVERage:POSitiv?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:MINimum:NEGativ?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:MINimum:POSitiv?
Top