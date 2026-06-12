# Trace Results

Module: Bluetooth Measurements
Source: ef233d351ebd40be.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Trace Results
Trace Results
The following commands return the trace results of the multi-evaluation measurement. See also 
"Defining the Scope of the Measurement"
.
List of Commands
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:AVERage?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:MINimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:MAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:CURRent?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:AVERage?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:MINimum?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:MAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:AVERage?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:MINimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:MAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:CURRent?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:AVERage?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:MINimum?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:MAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:AVERage?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:MAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:CURRent?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:AVERage?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:MAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:AVERage?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:MAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:CURRent?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:AVERage?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:MAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:IQABs?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:IQDiff?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:IQERr?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:IQABs?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:IQDiff?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:IQERr?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:AVERage?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:MAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:CURRent?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:AVERage?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:MAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:FRANge:AVERage?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:FRANge:AVERage?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP[:PTX]?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP[:PTX]?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp[:PTX]?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp[:PTX]?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:AVERage?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:MAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:CURRent?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:AVERage?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:MAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:AVERage?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:MAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:CURRent?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:AVERage?
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:MAXimum?
Top