# Split System Groups

Currently the systems contain 4 groups that are intertwined. But the thing is they don't actually need to be since each one only defines a behavior. I'd like to split them up and make them connectable instead. This would make it so you could have one spawner that leads to two initializers which each lead to two update groups, that each lead into 4 different render groups, resulting in 4 way different particles being emitted with a single spawner.
