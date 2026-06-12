# SENSeLTESIGNiUECapabilityMEASIRNGapsUFDD

Module: LTE Signaling
Source: 8adfaaf834014ecd.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
Measurement UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:UFDD?
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:UFDD? 
[<Index>]
Returns a list of values indicating the need for downlink measurement gaps when operating on a specific E-UTRA band and measuring on a specific UTRA FDD band.
The full list contains 32 times 256 values. Each block of 32 values corresponds to the UTRA FDD bands. The 256 repetitions correspond to the E-UTRA bands:
{measured band: 1, 2, ..., 32}
used band: user-defined
,
{measured band: 1, 2, ..., 32}
used band: 1
, ...,
{measured band: 1, 2, ..., 32}
used band: 255
Via the optional parameter <Index>, you can alternatively query the list for a single UTRA FDD band:
{used band: user-defined, 1, 2, ..., 255}
measured band <Index>
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
Without <Index>: 32 x 256 = 8192 values
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