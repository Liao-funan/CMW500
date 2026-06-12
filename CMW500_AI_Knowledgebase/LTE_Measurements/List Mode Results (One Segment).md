# List Mode Results (One Segment)

Module: LTE Measurements
Source: 9d3dfc498e0048f8.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
List Mode Results (One Segment)
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
LTE:
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
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:AVERage?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:SDEViation?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:CURRent?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:AVERage?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:EXTReme?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:EXTReme?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:AVERage?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:EXTReme?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:SDEViation?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:CURRent:RBINdex?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:MARGin:EXTReme:RBINdex?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:SCC<c>:MARGin:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:SCC<c>:MARGin:AVERage?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:SCC<c>:MARGin:EXTReme?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:SCC<c>:MARGin:SDEViation?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:SCC<c>:MARGin:CURRent:RBINdex?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:IEMission:SCC<c>:MARGin:EXTReme:RBINdex?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:AVERage?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:EXTReme?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:SDEViation?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:CURRent?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:AVERage?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:EXTReme?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ESFLatness:CURRent:SCINdex?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:AVERage?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:SDEViation?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:CURRent?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:AVERage?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:EXTReme?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:EXTReme?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:ALL?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:CURRent:NEGativ?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:CURRent:POSitiv?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:AVERage:NEGativ?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:AVERage:POSitiv?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:MINimum:NEGativ?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:MINimum:POSitiv?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:AVERage?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:CURRent?
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:AVERage?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:PMONitor:RMS?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:PMONitor:PEAK?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:POWer:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:POWer:AVERage?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:POWer:MINimum?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:POWer:MAXimum?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:POWer:SDEViation?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:DALLocation?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:DALLocation?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:DALLocation?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:DMODulation?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:DCHType?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:DCHType?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:DCHType?
Top