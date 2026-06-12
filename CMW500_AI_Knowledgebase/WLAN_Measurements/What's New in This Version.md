# What's New in This Version

Module: WLAN Measurements
Source: 66e68f1510da4ced.htm

## 原始指令文档说明
WLAN Measurements
 > 
What's New in This Version
What's New in This Version
This documentation describes version 3.7.30 and later of the WLAN measurement application. Compared to version 3.7.21, it provides the following new features and changes.
Standard IEEE 802.11ax is now supported by an R&S
 
CMW with TRX160, see:
–
"Standard"
–
"Modulation Limits: 802.11ax"
–
"Spectrum Flatness Limits: 802.11ax"
–
"Transmit Spectrum Mask Limits: 802.11ax"
Unused tone error limits added, see 
"Modulation Limits 802.11ax"
 and 
"View Unused Tone Error"
HE-SIG-B signal fields information, see 
"View TX Measurement (Scalar) for Signal Fields Info"
Additional EVM vs. symbol trace commands valid for all OFDM standards, see
FETCh:
​
WLAN:
​
MEAS<i>:
​
MEValuation:
​
TRACe:
​
EVMagnitude:
​
SYMBol:
​
CURRent?
 etc.
Replaced commands:
–
...
:MEValuation:TRACe:EVMagnitude:ACSiso:SYMBol:
...
–
...
:MEValuation:TRACe:EVMagnitude:NSISo:SYMBol:
...
–
...
:MEValuation:TRACe:EVMagnitude:OFDM:SYMBol:
...
Modulation filter extended for QAM-256 and QAM-1024 and also for standalone measurements, see
CONFigure:
​
WLAN:
​
MEAS<i>:
​
ISIGnal:
​
MODFilter
Added trace results for spectrum flatness for bandwidths with two segments, see:
FETCh:
​
WLAN:
​
MEAS<i>:
​
MEValuation:
​
TRACe:
​
SFLatness:
​
SEGMent<seg>:
​
CURRent?
 etc.
IEEE 802.11ax limits for HE TB PPDU  high and low added, see 
"Modulation Limits 802.11ax"
Selection of relative or absolute results in spectrum flatness view, see 
"Display Mode"
Contents
V3.7.21 (Compared to V3.7.20)
V3.7.20 (Compared to V3.7.10)
V3.7.10 (Compared to V3.5.121)
V3.5.121 (Compared to V3.5.120)
V3.5.120 (Compared to V3.5.40)
V3.5.40 (Compared to V3.5.30)
V3.5.30 (Compared to V3.5.20)
V3.5.20 (Compared to V3.5.10)
V3.5.10 (Compared to V3.2.71)
V3.2.71 (Compared to V3.2.70)
V3.2.70 (Compared to V3.2.60)
V3.2.60 (Compared to V3.2.40)
V3.2.40 (Compared to V3.2.20)
V3.2.20 (Compared to V3.2.11)
V3.2.11 (Compared to V3.2.10)
V3.2.10 (Compared to V3.0.20)
V3.0.20 (Compared to V3.0.11)
V3.0.11 (Compared to V3.0.10)
V3.0.10 (Compared to V2.1.40)
V2.1.40 (Compared to V2.1.30)
V2.1.30 (Compared to V2.1.10)
V2.1.10 (Compared to V2.0.10)
V2.0.10 (Compared to V1.0.15.20)
V1.0.15.20 (Compared to V1.0.15.0)
V1.0.15.0 (Compared to V1.0.10.50)
V1.0.10.50 (Compared to V1.0.10.1)
Top