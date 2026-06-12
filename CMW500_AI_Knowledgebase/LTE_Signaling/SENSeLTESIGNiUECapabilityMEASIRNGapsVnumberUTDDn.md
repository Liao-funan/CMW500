# SENSeLTESIGNiUECapabilityMEASIRNGapsVnumberUTDDn

Module: LTE Signaling
Source: b0ce68b286154649.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
Measurement UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:V<number>:UTDD<n>?
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:V<number>:UTDD<n>? 
[<Index>]
Returns a list of values indicating the need for downlink measurement gaps when operating on a specific E-UTRA band combination and measuring on a specific UTRA TDD band.
The full list contains 32 times n+1 values. Each block of 32 values corresponds to the UTRA TDD bands. Each repetition corresponds to a supported band combination:
{measured band: 1, 2, ..., 32}
used band combination 0
,
{measured band: 1, 2, ..., 32}
used band combination 1
, ...,
{measured band: 1, 2, ..., 32}
used band combination n
Via the optional parameter <Index>, you can alternatively query the list for a single UTRA TDD band:
{used combination: 0, 1, ..., n}
measured band <Index>
Suffix: 
<n>
128
<number>
1020
Query parameters: 
<Index>
OB1 |
 
 OB2 |
 
 ... |
 
 OB32
Selects the measured UTRA TDD band, for which the list is returned.
Return values: 
<Value>
OFF |
 
 ON
Without <Index>: 32 x (n+1) values
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