# SOURceGPRFGENiRELiabilityALL

Module: GPRF Generator
Source: 30237fe1b7eb49bf.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
Generator Control and States
 > 
SOURce:GPRF:GEN<i>:RELiability:ALL?
SOURce:GPRF:GEN<i>:RELiability:ALL? 
Reports if and why there are problems generating the configured signal.
This information is also displayed in the "Current State" view of the INFO dialog.
The reliability indicator has one of the following values:
0 (OK)
:
Measurement values available, no error detected.
1 (measurement timeout)
:
The measurement has been stopped after the configured measurement timeout. Measurement results can be available. However, at least a part of the measurement provides only 
INValid
 results or has not completed the full statistic count.
2 (capture buffer overflow)
:
The measurement configuration results in a capture length that exceeds the available memory.
3 (overdriven) / 4 (underdriven)
:
The accuracy of measurement results can be impaired because the input signal level was too high / too low.
6 (trigger timeout)
:
The measurement could not be started or continued because no trigger event was detected.
7 (acquisition error)
:
The R&S
 
CMW could not properly decode the RF input signal.
8 (sync error)
:
The R&S
 
CMW could not synchronize to the RF input signal.
9 (uncalibrated)
:
Due to an inappropriate configuration of resolution bandwidth, video bandwidth or sweep time, the measurement results are not within the specified data sheet limits.
15 (reference frequency error)
:
The instrument has been configured to use an external reference signal. But the reference oscillator could not be phase-locked to the external signal (for example signal level too low, frequency out of range or reference signal not available at all).
16 (RF not available)
:
The measurement could not be started because the configured RF input path was not active. This problem can occur if a measurement is started in combined signal path mode and the master application has not yet activated the input path. The LEDs above the RF connectors indicate whether the input and output paths are active.
17 (RF level not settled) / 18 (RF frequency not settled)
:
The measurement could not be started because the R&S
 
CMW was not yet ready to deliver stable results after a change of the input signal power / the input signal frequency.
19 (call not established)
:
For measurements: The measurement could not be started because no signaling connection to the DUT was established.
20 (call type not usable)
:
For measurements: The measurement could not be started because the established signaling connection had wrong properties.
21 (call lost)
:
For measurements: The measurement was interrupted because the signaling connection to the DUT was lost.
23 (missing option)
:
The ARB file cannot be played by the GPRF generator due to a missing option.
24 (invalid RF setting)
:
The desired RF TX level or RF RX reference level could not be applied.
25 (level overrange)
:
The RF TX level is in overrange. The signal quality can be degraded.
26 (resource conflict)
:
The application could not be started or has been stopped due to a conflicting hardware resource or software option that is allocated by another application.
Stop the application that has allocated the conflicting resources and try again.
27 (no sensor connected)
:
The GPRF external power sensor measurement could not be started due to missing power sensor.
28 (unexpected parameter change)
:
One or more measurement configuration parameters were changed while the measurement completed. The results were not obtained with these new parameter values. Repeat the measurement. This situation can only occur in remote single-shot mode.
30 (file not found)
:
The specified file could not be found.
31 (no DTM reply)
:
The EUT did not reply to the direct test mode (DTM) command.
32 (ACL disconnected)
:
The ACL connection has been disconnected or lost.
40 (ARB file CRC error)
:
The cyclic redundancy check of the ARB file failed. The ARB file is corrupt and not reliable.
42 (ARB header tag invalid)
:
The ARB file selected in the GPRF generator contains an invalid header tag.
43 (ARB segment overflow)
:
The number of segments in the multi-segment ARB file is higher than the allowed maximum.
44 (ARB file not found)
:
The selected ARB file could not be found.
45 (ARB memory overflow)
:
The ARB file length is greater than the available memory.
46 (ARB sample rate out of range)
:
The clock rate of the ARB file is either too high or too low.
47 (ARB cycles out of range)
:
The repetition mode equals "Single Shot" and the playback length is greater than 40 s. Reduce the playback length or set the repetition mode to "Continuous".
<Length> = (<Cycles> * <Samples> + <Additional Samples>) / <Clock Rate>
60 (invalid RF connector setting)
The individual segments of a list mode measurement with R&S CMWS use different connector benches. All segments must use the same bench.
Check the "Info" dialog for the relevant segment numbers.
70 (wrong standard)
The standard of the measured signal does not match the configured standard.
71 (wrong bandwidth)
The bandwidth of the measured signal does not match the configured bandwidth.
72 (wrong burst type)
The burst type of the measured signal does not match the configured burst type.
73 (MIMO signal detected)
The measurement expects a SISO signal and detected a MIMO signal. Use a MIMO receive mode to measure this signal.
74 (more streams than antennas)
The measured signal has more streams than expected due to the configured number of antennas. Increase the configured number of antennas to measure this signal.
75 (matrix inversion failed)
The inversion of the channel matrix failed for a MIMO measurement. Check that the antennas are connected correctly to the instrument.
76 (SIG CRC failed)
The cyclic redundancy check of a SIGNAL field failed.
77 (parity check failed)
The parity check of a SIGNAL field failed.
78 (bursts not identical)
In training mode for composite MIMO measurements, at least some symbols of sequential bursts need to be identical to be used as training data. Setting a fix scrambler initialization can solve this problem.
79 (wrong modulation)
The modulation type of the measured signal does not match the configured modulation type.
93 (OCXO oven temperature too low)
:
The accuracy of measurement results can be impaired because the oven-controlled crystal oscillator has a too low temperature. After switching-on the instrument, the OCXO requires a warm-up phase to reach its operating temperature.
101 (firmware error)
:
Indicates a firmware or software error. If you encounter this error for the first time, restart the instrument.
If the error occurs again, consider the following hints:
–
Firmware errors can often be repaired by restoring the factory default settings. To restore these settings, restart your instrument and press the "Factory Default" softkey during startup.
–
If a software package (update) has not been properly installed, this failure is often indicated in the "Setup" dialog, section "SW/HW-Equipment > Installed Software".
–
Check for software updates correcting the error. Updates are provided in the CMW customer web on GLORIS (registration required): 
https://gloris.rohde-schwarz.com
.
If you get firmware errors even with the properly installed latest software version, send a problem report including log files to Rohde & Schwarz.
102 (unidentified error)
:
Indicates an error not covered by other reliability values. For troubleshooting, follow the steps described for "101 (firmware error)".
103 (parameter error)
:
Indicates that the measurement could not be performed due to internal conflicting parameter settings.
A good approach to localize the conflicting settings is to start with a reset or preset or even restore the factory default settings. Then reconfigure the measurement step by step and check when the error occurs for the first time.
If you need assistance to localize the conflicting parameter settings, contact Rohde & Schwarz (see 
http://www.service.rohde-schwarz.com
).
104 (not functional)
:
The application could not be started with the configured parameter set.
Return values: 
<Reliability>
The reliability indicator
<ReliabilityMsg>
Contains the reason for a reliability value > 0 or the empty string "" for reliability = 0
<ReliabilityAddInfo>
Contains additional information for a reliability value > 0 or the empty string "" for reliability = 0
Usage: 
Query only
Firmware/Software: 
V3.0.11
Manual operation: 
See 
"Baseband Configuration > ARB > ARB File"
Top