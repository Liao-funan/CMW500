# List Mode Results (All Segments, One Result)

Module: GSM Measurements
Source: 9aa6f14899694fca.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
List Mode Results (All Segments, One Result)
Each of the following commands returns a selected list mode result for all measured segments. The number of returned results depends on the number of measured segments, see 
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
.
To configure the list mode, use the commands described in 
"List Mode Settings"
.
For a description of the list mode, see 
"List Mode"
.
The indicated ranges apply to all statistical results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
List of Commands
FETCh:GSM:MEAS<i>:MEValuation:LIST:SRELiability?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:PVTime:ABPower:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:PVTime:ABPower:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:ABPower:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:ABPower:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:UMAXimum:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:UMAXimum:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:UMAXimum:MINimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:UMAXimum:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:UMINimum:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:UMINimum:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:UMINimum:MINimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:UMINimum:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:SUBVector<no>:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:SUBVector<no>:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:SUBVector<no>:MINimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:SVECtor:SUBVector<no>:MAXimum?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:RMS:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:RMS:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:RMS:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:RMS:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:RMS:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:RMS:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:RMS:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PERCentile?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:EVM:PERCentile?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PERCentile?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PERCentile?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PERCentile?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PERCentile?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:FERRor:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:TERRor:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:BPOWer:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:BPOWer:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:BPOWer:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:BPOWer:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:BPOWer:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:BPOWer:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:BPOWer:SDEViation?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:AVERage?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:MAXimum?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:APDelay:SDEViation?
FETCh:GSM:MEAS<i>:MEValuation:LIST:BER:BER?
FETCh:GSM:MEAS<i>:MEValuation:LIST:BER:ABSolute?
FETCh:GSM:MEAS<i>:MEValuation:LIST:BER:COUNt?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SMODulation:CPOWer?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SMODulation:CPOWer?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SSWitching:CPOWer?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SSWitching:CPOWer?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SMODulation:POFFset<no>?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SMODulation:POFFset<no>?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SSWitching:POFFset<no>?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SSWitching:POFFset<no>?
Top