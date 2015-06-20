Feature: Statistics
  As a user
  I want to be able to view statistics on champion/role combinations
  So that I may better inform myself of the best position to play a champion in

  Scenario: View statistics page
    When I am on the statistics page
    Then I should see a grid
    # TODO: This is all quite brittle if we ever introduced i18n
      And the grid should have the column 'Rank'
      And the grid should have the column 'Champion'
      And the grid should have the column 'Role'
      And the grid should have the column 'Win Percent'
      And the grid should have the column 'Play Percent'
      And the grid should have the column 'Ban Rate'
      And the grid should have the column 'Playerbase Avg. Games'
      And the grid should have the column 'Kills'
      And the grid should have the column 'Deaths'
      And the grid should have the column 'Assists'
      And the grid should have the column 'Largest Killing Spree'
      And the grid should have the column 'Damage Dealt'
      And the grid should have the column 'Damage Taken'
      And the grid should have the column 'Total Healing'
      And the grid should have the column 'Minions Killed'
      And the grid should have the column 'Enemy Jungle CS'
      And the grid should have the column 'Team Jungle CS'
      And the grid should have the column 'Gold Earned'
      And the grid should have the column 'Role Position'
      And the grid should have the column 'Position Change'
