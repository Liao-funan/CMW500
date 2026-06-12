# FETChWLANMEASiTMODeANTennaAntennas

Module: WLAN Measurements
Source: 81a079036e924dc9.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
CMIMO Training Mode
 > 
FETCh:WLAN:MEAS<i>:TMODe:ANTenna<Antennas>?
FETCh:WLAN:MEAS<i>:TMODe:ANTenna<Antennas>? 
READ:WLAN:MEAS<i>:TMODe:ANTenna<Antennas>? 
Return information about the training data acquired on the designated antenna and the decode status of the received signal.
Suffix: 
<Antennas>
1..8
Antenna number; must not exceed the configured number of antennas
Return values: 
<Reliability>
"Reliability Indicator"
<DecodeStatus>
NAV |
 
 INV |
 
 OK
The decode status of the received signal is not available (
NAV
) until all involved TX antenna signals were recorded.
Then it changes to 
OK
 if the HT-SIG (high throughput signaling) fields of individual antenna signals are consistent, or to 
INValid
 otherwise.
<MCS>
Modulation and coding scheme of the recorded antenna signal, obtained from the HT-SIG field
<Power>
Absolute power of the measured antenna signal
Default unit: 
dBm
<PilotEvm>
Error vector magnitude of the pilot subcarriers
Default unit: 
dB
Example: 
See 
"CMIMO Training Mode"
Usage: 
Query only
Firmware/Software: 
V2.1.10, V3.7.30: increased number of antennas
Options: 
R&S CMW-KM652
Manual operation: 
See 
"Results"
Top