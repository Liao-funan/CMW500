# List Mode Results (One Segment)

Module: GSM Measurements
Source: 2a59a59f58994302.htm

## 原始指令文档说明
GSM Measurements
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
The segment number <no> in the following commands refers to the range of measured segments (1..512), see 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
LRANge
. It can differ from the absolute segment number used for segment configuration.
List of Commands
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:CURRent:SVECtor?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:AVERage:SVECtor?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:MINimum:SVECtor?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:MAXimum:SVECtor?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:PERCentile?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:PERCentile?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:SMODulation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:SMODulation?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:SSWitching?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:SSWitching?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:BER?
Top