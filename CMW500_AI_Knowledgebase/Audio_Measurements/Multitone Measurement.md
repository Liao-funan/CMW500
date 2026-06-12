# Multitone Measurement

Module: Audio Measurements
Source: d279f958dfb245ec.htm

## 原始指令文档说明
Audio Measurements
 > 
Programming
 > 
Audio Measurement and Generator Scenario
 > 
Multitone Measurement
Multitone Measurement
The following example configures all settings specific for a multitone measurement, starts the audio generator, starts the audio measurement and queries the measurement results.
// *****************************************************************************
// Select multitone as signal type and couple the generator to a measurement.
// *****************************************************************************
SOURce:AUDio:GEN:ANALog:STYPe MULTitone
SOURce:AUDio:GEN:ANALog:ACOupling ANAL
// *****************************************************************************
// Configure multitone crest factor
// *****************************************************************************
SOURce:AUDio:GEN:ANALog:MULTitone:CRESt LOW
// *****************************************************************************
// Configure multitone list: select separate level configuration per tone, 
// configure frequency and level of tone 1 to 3, correct settings for tone 2,
// query resulting total level, use tone 1 to 3.
// *****************************************************************************
SOURce:AUDio:GEN:ANALog:MULTitone:LSELection SEP
SOURce:AUDio:GEN:ANALog:MULTitone:TDEFinition 2000, 0.5, 4000, 0.7, 6000, 1.5
SOURce:AUDio:GEN:ANALog:MULTitone:TONE2:TDEFinition 4000, 1
SOURce:AUDio:GEN:ANALog:MULTitone:TLEVel?
SOURce:AUDio:GEN:ANALog:MULTitone:STARt 1
SOURce:AUDio:GEN:ANALog:MULTitone:STOP 3
// *****************************************************************************
// Check the expected signal type of the analog measurement, resulting from the
// generator settings (should be MULTitone).
// *****************************************************************************
CONFigure:AUDio:MEAS:ANALog:RTYPe?
// *****************************************************************************
// Configure the statistic count of the measurement.
// *****************************************************************************
CONFigure:AUDio:MEAS:ANALog:MULTitone:SCOunt 12
// *****************************************************************************
// Set result mode: absolute power results.
// *****************************************************************************
CONFigure:AUDio:MEAS:ANALog:MULTitone:RMODe ABS
// *****************************************************************************
// Configure the multitone measurement filters.
// *****************************************************************************
CONFigure:AUDio:MEAS:ANALog:MULTitone:FILTer:LPASs LP15
CONFigure:AUDio:MEAS:ANALog:MULTitone:FILTer:HPASs H300
CONFigure:AUDio:MEAS:ANALog:MULTitone:FILTer:WEIGhting AWEight
// *****************************************************************************
// Switch on the audio generator. Wait until the command has been executed and
// query the generator state (should be ON). 
// *****************************************************************************
SOURce:AUDio:GEN:ANALog:STATe ON; *OPC?
SOURce:AUDio:GEN:ANALog:STATe?
// *****************************************************************************
// Start the audio measurement.
// Query the average and maximum measurement results.
// Query the measurement state (should be RDY).
// *****************************************************************************
INITiate:AUDio:MEAS:ANALog
FETCh:AUDio:MEAS:ANALog:MULTitone:AVERage?
FETCh:AUDio:MEAS:ANALog:MULTitone:MAXimum?
FETCh:AUDio:MEAS:ANALog:STATe?
Top