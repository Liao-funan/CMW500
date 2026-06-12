# SENSeLTESIGNiUECapabilityMEASIRNGapsVnumberUFDD

Module: LTE Signaling
Source: 260c18d09c2c4896.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
Measurement UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:V<number>:UFDD?
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:V<number>:UFDD? 
[<Index>]
Returns a list of values indicating the need for downlink measurement gaps when operating on a specific E-UTRA band combination and measuring on a specific UTRA FDD band.
The full list contains 32 times n+1 values. Each block of 32 values corresponds to the UTRA FDD bands. Each repetition corresponds to a supported band combination:
{measured band: 1, 2, ..., 32}
used band combination 0
,
{measured band: 1, 2, ..., 32}
used band combination 1
, ...,
{measured band: 1, 2, ..., 32}
used band combination n
Via the optional parameter <Index>, you can alternatively query the list for a single UTRA FDD band:
{used combination: 0, 1, ..., n}
measured band <Index>
Suffix: 
<number>
1020
Query parameters: 
<Index>
OB1 |
 
 OB2 |
 
 ... |
 
 OB32
Selects the measured UTRA FDD band, for which the list is returned.
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