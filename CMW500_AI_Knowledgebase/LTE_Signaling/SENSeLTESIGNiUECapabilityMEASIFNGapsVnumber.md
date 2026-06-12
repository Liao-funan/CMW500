# SENSeLTESIGNiUECapabilityMEASIFNGapsVnumber

Module: LTE Signaling
Source: 9f1acea30f7c442b.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
Measurement UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:MEAS:IFNGaps:V<number>?
SENSe:LTE:SIGN<i>:UECapability:MEAS:IFNGaps:V<number>? 
[<Index>]
Returns a list of values indicating the need for downlink measurement gaps when operating on a specific E-UTRA band combination and measuring on a specific E-UTRA band.
The full list contains 256 times n+1 values. Each block of 256 values corresponds to the measured E-UTRA bands. Each repetition corresponds to a supported band combination.
The list is ordered as follows:
{measured band: user-defined, 1, 2, ..., 255}
used band combination 0
,
{measured band: user-defined, 1, 2, ..., 255}
used band combination 1
, ...,
{measured band: user-defined, 1, 2, ..., 255}
used band combination n
Via the optional parameter <Index>, you can alternatively query the list for a single measured E-UTRA band:
{used combination: 0, 1, ..., n}
measured band <Index>
Suffix: 
<number>
1020
Query parameters: 
<Index>
UDEFined |
 
 OB1 |
 
 ... |
 
 OB45 |
 
 OB46 |
 
 OB48 |
 
 OB65 |
 
 ... |
 
 OB71 |
 
 OB250 |
 
 OB252 |
 
 OB255
Selects the measured E-UTRA band, for which the list is returned.
Return values: 
<Value>
OFF |
 
 ON
Without <Index>: 256 x (n+1) values
With <Index>: n+1 values
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.2.80, some bands added in later versions
V3.5.40: result array restructured
Manual operation: 
See 
"Inter-Freq Need for Gaps v1020"
Top