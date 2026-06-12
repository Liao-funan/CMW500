# SCPI Concurrency Support Tools (SCST)

Module: SCST
Source: e15e3e8d6e6d4a0b.htm

## 原始指令文档说明
SCPI Concurrency Support Tools (SCST)
During each DUT test, the test instrument is sometimes idle. When you boot the DUT, for example, or when you set up the cabling, the test instrument is not used.
If you want to test several DUTs, you can optimize the test performance by handling several DUTs in parallel. While you connect one DUT, you boot another one and run a measurement on a third one.
Another scenario is the parallel test of several DUTs, where you broadcast the same test signal to all DUTs.
In such shared test scenarios, you typically have one control PC per DUT. All PCs run the same test script in parallel but independently of each other. At the test instrument, you need control mechanisms for timing of the test scripts running in parallel. These mechanisms must ensure that critical resources are only used by one test script at a time. For broadcasts, they must ensure that all DUTs are ready before the broadcast is started.
The SCPI concurrency support tools (SCST) provide SCPI commands for cooperative multitasking. "Cooperative" means, you must program your scripts so that they cooperate. The commands do, for example, not prevent that several scripts use critical resources in parallel. But they allow you to check whether a critical resource is used and if so, to wait until it is free again.
You can add the commands to your test script and run the same test script on several PCs in parallel.
The following command groups are included:
Mutex
Lock/unlock mechanism for critical test script sections.
Use the commands to program the following behavior: A script entering a critical section locks the related mutex. When leaving the section, the script unlocks the mutex. A script enters the critical section only if the mutex is not locked. Otherwise, the script waits.
Synchronization point
Use the commands to program the following behavior: A script/process reaching a synchronization point joins it and waits until synchronization is complete.
The number of processes/scripts that must join the synchronization point is configurable. The first or the last joining process can be ordered to execute a special task.
The synchronization is complete if the defined number of processes has joined and an optionally ordered single task is complete.
Variables
Use the commands to define integer variables, change the variable values and query the values.
The created SCST objects are only available during the current session. After a startup or reboot, there are no user-defined SCST objects.
The term "process" is used in the following. There are several parallel processes that are timed via SCST commands. Each process is typically related to a single SCPI connection, a single DUT and a single test script instance.
The SCST command groups are described in detail in the following sections.
Contents
Mutex
Synchronization Point
Variables
Top