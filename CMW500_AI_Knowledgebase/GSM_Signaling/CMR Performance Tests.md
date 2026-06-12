# CMR Performance Tests

Module: GSM Signaling
Source: 77d62315682543b1.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
CMR Performance Tests
CMR Performance Tests
The "CMR Performance" measurement provided by the GSM signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:GSM:SIGN:CPERformance:...
After a 
*RST
, the measurement is switched off. Use 
READ:GSM:SIGN:CPERformance:...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:GSM:SIGN:CPERformance:
 and retrieve the results using 
FETCh:GSM:SIGN:CPERformance:...?
.
The examples in this section focus on commands directly related to the CMR performance measurement. For general configuration of the signaling application, refer to 
"General Configuration"
.
Contents
Configuring the CMR Performance Measurement
Performing a CMR Performance Measurement
Top