# Modulation Measurement Results (LE)

Module: Bluetooth Measurements
Source: cf13c6b8125e4537.htm

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
Modulation Measurement Results (LE)
Modulation Measurement Results (LE)
The following commands return the modulation results.
Commands for LE 1M PHY - uncoded (
...:LE1M...
), LE 2M PHY - uncoded (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
List of Commands
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:CURRent?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:AVERage?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:XMINimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:XMAXimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:MAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:AVERage?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:XMINimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:XMAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:MAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:CURRent?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:AVERage?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:XMINimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:XMAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:MAXimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:CURRent?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:AVERage?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:XMINimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:XMAXimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:MAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:AVERage?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:XMINimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:XMAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:MAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:CURRent?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:AVERage?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:XMINimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:XMAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:MAXimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:CURRent?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:AVERage?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMINimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMAXimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:AVERage?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMINimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:CURRent?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:AVERage?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMINimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMAXimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MAXimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:MINimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:MINimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:MINimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:MINimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:MINimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:MINimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MINimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MINimum?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MINimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:SDEViation?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:SDEViation?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:SDEViation?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:SDEViation?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:SDEViation?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:SDEViation?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:SDEViation?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:SDEViation?
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:SDEViation?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:YIELd?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:YIELd?
Top