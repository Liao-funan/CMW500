# Modulation Single Values, OFDM

Module: WLAN Measurements
Source: c83c87b7537c4f2f.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Single Values, OFDM
Modulation Single Values, OFDM
The commands in this section return the statistical modulation results for OFDM signals.
The commands 
...:MODulation:CURRent/...
 query results that are antenna-independent, stream-independent and segment-independent.
For switched MIMO results per antenna/stream, use the commands with 
MIMO<n>
 mnemonic. For results per segment (80+80 MHz signals), use the commands with 
SEGMents
 mnemonic.
For composite MIMO results, use the 
CMIMo
 commands.
See also:
"View TX Measurement (Scalar) for OFDM SISO"
"View TX Measurement (Scalar) for CMIMO (802.11n, ac)"
"View TX Measurement (Scalar) for SMIMO (802.11n, ac, ax)"
List of Commands
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MINimum?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MAXimum?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SDEViation?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SDEViation?
READ:WLAN:MEAS<i>:MEValuation:MODulation:CURRent?
READ:WLAN:MEAS<i>:MEValuation:MODulation:AVERage?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MINimum?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:MODulation:SDEViation?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MINimum?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MAXimum?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SDEViation?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SDEViation?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:CURRent?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:AVERage?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MINimum?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SDEViation?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MINimum?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MAXimum?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:SDEViation?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:SDEViation?
READ:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:CURRent?
READ:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:AVERage?
READ:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MINimum?
READ:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:SDEViation?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MINimum?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MAXimum?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:SDEViation?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:SDEViation?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:CURRent?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:AVERage?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MINimum?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:SDEViation?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:SDEViation?
READ:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:CURRent?
READ:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:AVERage?
READ:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:MODulation:CMIMo:SDEViation?
Top