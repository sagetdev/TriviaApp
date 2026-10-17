import React, { useState } from 'react';
import { View } from 'react-native';
import { getLeaderboard, Period, periods } from '../../src/data/mock';
import { Screen } from '../../src/components/Screen';
import { Card, SegmentedControl, Text } from '../../src/components/ui';
import { PodiumItem, RankingRow } from '../../src/components/features';

export default function RankingScreen() {
  const [period, setPeriod] = useState<Period>('weekly');
  const players = getLeaderboard(period);

  const byRank = (r: number) => players.find((p) => p.rank === r)!;
  const podium = [byRank(2), byRank(1), byRank(3)];
  const rest = players.filter((p) => p.rank > 3);

  return (
    <Screen scroll>
      <Text size={28} weight="bold">
        Leaderboard
      </Text>

      <SegmentedControl options={periods} value={period} onChange={setPeriod} />

      <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 12 }}>
        {podium.map((p) => (
          <PodiumItem key={p.rank} player={p} />
        ))}
      </View>

      <Card radius={20} style={{ padding: 8, gap: 2 }}>
        {rest.map((p) => (
          <RankingRow key={p.rank} player={p} />
        ))}
      </Card>
    </Screen>
  );
}
