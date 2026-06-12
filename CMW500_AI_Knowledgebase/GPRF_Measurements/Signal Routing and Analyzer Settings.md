# Signal Routing and Analyzer Settings

Module: GPRF Measurements
Source: 83baae9dbc024aa2.htm

## 原始指令文档说明
GPRF Measurements
 > 
GUI Reference
 > 
Signal Routing and Analyzer Settings
Signal Routing and Analyzer Settings
The following common parameters configure the RF input path. They are used for the "Power", "Spectrum", "FFT Spectrum Analyzer", "I/Q Recorder" and "I/Q vs. Slot" measurements.
Signal routing and analyzer settings for GPRF measurements
└
 
Scenario
└
 
RF Routing
└
 
External Attenuation (Input)
└
 
Frequency
└
 
Expected Nominal Power
└
 
User Margin
└
 
Mixer Level Offset
└
 
Frequency Offset
Scenario
Selects the measurement scenario. The GPRF measurements can be used in "Standalone" mode or in combination with another R&S
 
CMW application.
"Standalone"
Perform the GPRF measurements independently, using the GPRF measurement settings.
"Combined Signal
 
Path"
Use another signaling application (e.g. "GSM Signaling") as a master application for the GPRF measurements. The available master applications (depending on the options on your instrument) are displayed in the "Controlled by" list.
The master application configures the signal routing and analyzer settings for the GPRF measurements. While "Combined Signal Path" is active, the master application settings appear in a "Controller Settings" section. Changing the "Controller Settings" affects the master application but leaves the original (suspended) GPRF measurement settings unchanged. The original settings are restored when the "Standalone" scenario is selected again.
To configure these settings via remote commands, use the commands of the controlling signaling application. For a command table, see 
"Combined Signal Path Commands"
.
Remote command: 
ROUTe:
​
GPRF:
​
MEAS<i>:
​
SCENario?
ROUTe:
​
GPRF:
​
MEAS<i>:
​
SCENario:
​
CSPath
ROUTe:
​
GPRF:
​
MEAS<i>:
​
SCENario:
​
CATalog:
​
CSPath?
ROUTe:
​
GPRF:
​
MEAS<i>?
 
RF Routing
Selects the input path for the measured RF or digital IQ signal, i.e. the input connector and the RX module to be used.
Depending on your hardware configuration, there are dependencies between both parameters. Select the input connector first. The "Converter" parameter offers only values compatible to the selected input connector.
In the standalone (SA) scenario, these parameters are controlled by the measurement. In the combined signal path (CSP) scenario, they are controlled by the signaling application.
Remote command: 
SA: 
ROUTe:
​
GPRF:
​
MEAS<i>:
​
SCENario:
​
SALone
CSP: 
ROUTe:...:SIGN<i>:SCENario:...
 
External Attenuation (Input)
Defines the value of an external attenuation (or gain, if the value is negative) in the input path. The power readings of the R&S
 
CMW are corrected by the external attenuation value.
The external attenuation value is also used in the calculation of the maximum input power that the R&S
 
CMW can measure.
If a correction table for frequency-dependent attenuation is active for the chosen connector, then the table name and a button are displayed. Press the button to display the table entries.
In the standalone (SA) scenario, this parameter is controlled by the measurement. In the combined signal path (CSP) scenario, it is controlled by the signaling application.
Remote command: 
SA: 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
EATTenuation
CSP: corresponding 
...:SIGN<i>:...
 command
 
Frequency
Center frequency of the RF analyzer. Set this frequency to the frequency of the measured RF signal to obtain a meaningful measurement result.
In the standalone (SA) scenario, this parameter is controlled by the measurement. In the combined signal path (CSP) scenario, it is controlled by the signaling application.
Remote command: 
SA: 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
FREQuency
CSP: corresponding 
...:SIGN<i>:...
 command
 
Expected Nominal Power
Sets the analyzer in accordance with the nominal power of the RF signal to be measured. The nominal power is the average output power at the DUT during the measurement intervals where the RF transmitter is on. The "Ref. Level" is calculated as the expected peak power at the output of the DUT:
Reference level = expected nominal power + user margin
Note:
 The actual input power at the connectors must be within the level range of the selected RF input connector; refer to the data sheet. If all power settings are configured correctly, the actual power equals the "Reference Level" minus the "External Attenuation (Input)" value.
In the standalone (SA) scenario, this parameter is controlled by the measurement. In the combined signal path (CSP) scenario, it is controlled by the signaling application.
Remote command: 
SA: 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
ENPower
CSP: corresponding 
...:SIGN<i>:...
 command
 
User Margin
Margin that the R&S
 
CMW adds to the "Expected Nominal Power" to determine its reference power ("Ref. Level"). The "User Margin" is typically used to account for the known variations of the RF input signal power, e.g. the variations due to a specific channel configuration.
The appropriate value depends on the signal properties, for example on the modulation scheme.
In the standalone (SA) scenario, this parameter is controlled by the measurement. In the combined signal path (CSP) scenario, it is controlled by the signaling application.
Remote command: 
SA: 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
UMARgin
CSP: corresponding 
...:SIGN<i>:...
 command
 
Mixer Level Offset
Varies the input level of the mixer in the analyzer path. A negative offset reduces the mixer input level. A positive offset increases the mixer input level. Optimize the mixer input level according to the properties of the measured signal.
Mixer level offset
Advantages
Possible shortcomings
< 0 dB
Suppression of distortion (e.g. of the intermodulation products generated in the mixer)
Lower dynamic range (due to smaller signal-to-noise ratio)
> 0 dB
High signal-to-noise ratio, higher dynamic range
Risk of intermodulation, smaller overdrive reserve
In the standalone (SA) scenario, this parameter is controlled by the measurement. In the combined signal path (CSP) scenario, it is controlled by the signaling application.
Remote command: 
SA: 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
MLOFfset
CSP: corresponding 
...:SIGN<i>:...
 command
 
Frequency Offset
Offset that the R&S
 
CMW adds to the center frequency.
In the standalone (SA) scenario, this parameter is controlled by the measurement. In the combined signal path (CSP) scenario, it is controlled by the signaling application.
Remote command: 
SA: 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
FOFFset
CSP: corresponding 
...:SIGN<i>:...
 command
 
Top