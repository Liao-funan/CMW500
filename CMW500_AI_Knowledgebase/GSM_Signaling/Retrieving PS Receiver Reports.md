# Retrieving PS Receiver Reports

Module: GSM Signaling
Source: 0fcd96eb7bee4a2f.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Retrieving PS Receiver Reports
Retrieving PS Receiver Reports
// ***************************************************************************** 
// Retrieve the "C value" (i.e. the measured average carrier level) and the 
// signal variance: query for index values and corresponding ranges.
// ***************************************************************************** 
SENSe:GSM:SIGN:RREPort:CVALue?
SENSe:GSM:SIGN:RREPort:CVALue:RANGe?
SENSe:GSM:SIGN:RREPort:SVARiance?
SENSe:GSM:SIGN:RREPort:SVARiance:RANGe?
// ***************************************************************************** 
// Retrieve the mean bit error probability (MEAN_BEP) and the coefficient of
// variation of the bit error probability (CV_BEP) for the individual
// modulation types:
// GMSK, 8PSK, 16-QAM/32-QAM with normal and higher symbol rate
// ***************************************************************************** 
SENSe:GSM:SIGN:RREPort:GMBep?
SENSe:GSM:SIGN:RREPort:GMBep:RANGe?
SENSe:GSM:SIGN:RREPort:GCBep?
SENSe:GSM:SIGN:RREPort:GCBep:RANGe?
SENSe:GSM:SIGN:RREPort:EMBep?
SENSe:GSM:SIGN:RREPort:EMBep:RANGe?
SENSe:GSM:SIGN:RREPort:ECBep?
SENSe:GSM:SIGN:RREPort:ECBep:RANGe?
SENSe:GSM:SIGN:RREPort:NSRQam16:MBEP?
SENSe:GSM:SIGN:RREPort:NSRQam16:MBEP:RANGe?
SENSe:GSM:SIGN:RREPort:NSRQam16:CBEP?
SENSe:GSM:SIGN:RREPort:NSRQam16:CBEP:RANGe?
SENSe:GSM:SIGN:RREPort:NSRQam32:MBEP?
SENSe:GSM:SIGN:RREPort:NSRQam32:MBEP:RANGe?
SENSe:GSM:SIGN:RREPort:NSRQam32:CBEP?
SENSe:GSM:SIGN:RREPort:NSRQam32:CBEP:RANGe?
SENSe:GSM:SIGN:RREPort:HSRQam16:MBEP?
SENSe:GSM:SIGN:RREPort:HSRQam16:MBEP:RANGe?
SENSe:GSM:SIGN:RREPort:HSRQam16:CBEP?
SENSe:GSM:SIGN:RREPort:HSRQam16:CBEP:RANGe?
SENSe:GSM:SIGN:RREPort:HSRQam32:MBEP?
SENSe:GSM:SIGN:RREPort:HSRQam32:MBEP:RANGe?
SENSe:GSM:SIGN:RREPort:HSRQam32:CBEP?
SENSe:GSM:SIGN:RREPort:HSRQam32:CBEP:RANGe?
Top