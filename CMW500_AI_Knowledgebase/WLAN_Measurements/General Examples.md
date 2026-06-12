# General Examples

Module: WLAN Measurements
Source: 0be03d498c8f43b9.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
General Examples
The WLAN multi-evaluation measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...WLAN:MEAS:MEValuation...
Use general commands of the type 
...:WLAN:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
Use general commands of the type 
...:WLAN:MEAS:ISIGnal...
 (no 
:MEValuation
 mnemonic) to inform the R&S
 
CMW about the basic properties of the measured WLAN signal.
After a 
*RST
, the measurement is switched off. Use 
READ:WLAN:MEAS:MEValuation...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WLAN:MEAS:MEValuation
 and retrieve the results using 
FETCh:WLAN:MEAS:MEValuation...?
.
Contents
Specifying General Measurement Settings
Specifying Measurement-Specific Settings
Configuring the Trigger System
Specifying Limits (DSSS)
Specifying Power vs. Time Limits
Specifying Modulation Limits (OFDM)
Specifying Spectrum Flatness Limits (OFDM)
Specifying Transmit Spectrum Masks (OFDM)
Performing Single-Shot Measurements (OFDM, SISO)
Performing Single-Shot Measurements (OFDM, CMIMO)
Performing Single-Shot Measurements (OFDM, SMIMO, 80+80 MHz)
Performing Single-Shot Measurements (DSSS)
Single-Shot and Continuous Measurements
Retrieving Signal Fields Reports
CMIMO Training Mode
Top