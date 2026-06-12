# List Mode Results (One Segment)

Module: WLAN Measurements
Source: 09389ac544e24154.htm

## 原始指令文档说明
WLAN Measurements
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
"Multi-Evaluation List Mode"
.
The indicated ranges apply to all statistical results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
List of Commands
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:OFDM:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:OFDM:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:OFDM:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:OFDM:SDEViation?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:DSSS:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:DSSS:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:DSSS:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:DSSS:SDEViation?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:OFDM:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:OFDM:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:OFDM:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:NSISo:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:NSISo:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:NSISo:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:DSSS:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:DSSS:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:DSSS:MAXimum?
Top