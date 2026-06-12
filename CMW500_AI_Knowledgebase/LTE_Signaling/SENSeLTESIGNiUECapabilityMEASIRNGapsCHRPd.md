# SENSeLTESIGNiUECapabilityMEASIRNGapsCHRPd

Module: LTE Signaling
Source: a5d7d50e86044048.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
Measurement UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:CHRPd?
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:CHRPd? 
[<Index>]
Returns a list of values indicating the need for downlink measurement gaps when operating on a specific E-UTRA band and measuring on a specific CDMA2000 HRPD band.
The full list contains 18 times 256 values. Each block of 18 values corresponds to the CDMA2000 band classes. The 256 repetitions correspond to the E-UTRA bands:
{measured band: 0, 1, ..., 17}
used band: user-defined
,
{measured band: 0, 1, ..., 17}
used band: 1
, ...,
{measured band: 0, 1, ..., 17}
used band: 256
Via the optional parameter <Index>, you can alternatively query the list for a single CDMA2000 band class:
{used band: user-defined, 1, 2, ..., 255}
measured band <Index>
Query parameters: 
<Index>
BC0 |
 
 BC1 |
 
 ... |
 
 BC17
Selects the measured CDMA2000 band class, for which the list is returned.
Return values: 
<Value>
OFF |
 
 ON
Without <Index>: 18 x 256 = 4608 values
With <Index>: 256 values
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.0.30
V3.2.80: added <Index>
V3.5.40: result array restructured
Manual operation: 
See 
"Inter-RAT Need for Gaps"
Top