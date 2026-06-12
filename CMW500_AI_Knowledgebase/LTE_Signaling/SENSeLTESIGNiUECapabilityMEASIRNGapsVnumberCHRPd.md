# SENSeLTESIGNiUECapabilityMEASIRNGapsVnumberCHRPd

Module: LTE Signaling
Source: 811c022ee8944e77.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
Measurement UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:V<number>:CHRPd?
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:V<number>:CHRPd? 
[<Index>]
Returns a list of values indicating the need for downlink measurement gaps when operating on a specific E-UTRA band combination and measuring on a specific CDMA2000 HRPD band class.
The full list contains 18 times n+1 values. Each block of 18 values corresponds to the CDMA2000 band classes. Each repetition corresponds to a supported band combination:
{measured band: 0, 1, ..., 17}
used band combination 0
,
{measured band: 0, 1, ..., 17}
used band combination 1
, ...,
{measured band: 0, 1, ..., 17}
used band combination n
Via the optional parameter <Index>, you can alternatively query the list for a single CDMA2000 band class:
{used combination: 0, 1, ..., n}
measured band <Index>
Suffix: 
<number>
1020
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
Without <Index>: 18 x (n+1) values
With <Index>: n+1 values
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.2.80
Manual operation: 
See 
"Inter-RAT Need for Gaps v1020"
Top