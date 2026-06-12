# SENSeLTESIGNiUECapabilityMEASIRNGapsVnumberGERan

Module: LTE Signaling
Source: 5253979736ef42bf.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
Measurement UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:V<number>:GERan?
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:V<number>:GERan? 
[<Index>]
Returns a list of values indicating the need for downlink measurement gaps when operating on a specific E-UTRA band combination and measuring on a specific GERAN band.
The full list contains 11 times n+1 values. Each block of 11 values corresponds to the following GERAN bands: GSM 450, GSM 480, GSM 710, GSM 750, GSM 810, GSM 850, P-GSM 900, E-GSM 900, R-GSM 900, GSM 1800, GSM 1900. Each repetition corresponds to a supported band combination:
{measured band: GSM 450, GSM 480, ..., GSM 1900}
used band combination 0
,
{measured band: GSM 450, GSM 480, ..., GSM 1900}
used band combination 1
, ...,
{measured band: GSM 450, GSM 480, ..., GSM 1900}
used band combination n
Via the optional parameter <Index>, you can alternatively query the list for a single GERAN band:
{used combination: 0, 1, ..., n}
measured band <Index>
Suffix: 
<number>
1020
Query parameters: 
<Index>
G045 |
 
 G048 |
 
 G071 |
 
 G075 |
 
 G081 |
 
 G085 |
 
 G09P |
 
 G09E |
 
 G09R |
 
 G18 |
 
 G19
Selects the measured GERAN band, for which the list is returned.
Return values: 
<Value>
OFF |
 
 ON
Without <Index>: 11 x (n+1) values
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